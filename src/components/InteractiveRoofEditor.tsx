'use client'

import { useCallback, useState } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
  Panel,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// Custom Roof Panel Node - Simple Triangle
const RoofPanelNode = ({ data, selected }: { data: any; selected: boolean }) => {
  const [color, setColor] = useState(data.color || '#2c3e50')
  const [size, setSize] = useState(data.size || 1)

  const handleColorChange = (newColor: string) => {
    setColor(newColor)
    data.onColorChange?.(data.id, newColor)
  }

  const handleSizeChange = (newSize: number) => {
    setSize(newSize)
    data.onSizeChange?.(data.id, newSize)
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-lg border-2 p-4"
      style={{ 
        borderColor: selected ? '#3b82f6' : '#e5e7eb',
        width: '200px'
      }}
    >
      <div className="space-y-4">
        {/* Triangle Roof */}
        <div className="flex justify-center">
          <div 
            className="triangle"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${40 * size}px solid transparent`,
              borderRight: `${40 * size}px solid transparent`,
              borderBottom: `${60 * size}px solid ${color}`,
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
            }}
          />
        </div>

        {/* Color Control */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Color:</label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer"
            />
            <div className="flex space-x-1">
              {['#2c3e50', '#8b4513', '#654321', '#34495e', '#1a252f', '#ff6b35'].map((presetColor) => (
                <button
                  key={presetColor}
                  onClick={() => handleColorChange(presetColor)}
                  className="w-6 h-6 rounded border-2 border-gray-300 hover:border-blue-400"
                  style={{ backgroundColor: presetColor }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Size Control */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Size:</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0.7"
              max="1.5"
              step="0.1"
              value={size}
              onChange={(e) => handleSizeChange(parseFloat(e.target.value))}
              className="flex-1"
            />
            <span className="text-xs text-gray-600 w-12">{Math.round(size * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Custom Roof Structure Node
const RoofStructureNode = ({ data, selected }: { data: any; selected: boolean }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg border-2 p-4 min-w-[150px]"
      style={{ 
        borderColor: selected ? '#3b82f6' : '#e5e7eb',
        background: 'linear-gradient(135deg, #8b4513 0%, #a0522d 50%, #654321 100%)'
      }}
    >
      <div className="text-center">
        <div className="text-white font-medium mb-2">{data.label}</div>
        <div className="w-full h-12 bg-amber-600/30 rounded flex items-center justify-center">
          <div className="text-white text-xs">Support Structure</div>
        </div>
      </div>
    </div>
  )
}

const nodeTypes = {
  roofPanel: RoofPanelNode,
  roofStructure: RoofStructureNode,
}

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
}

const initialNodes = [
  {
    id: '1',
    type: 'roofPanel',
    position: { x: 200, y: 100 },
    data: { 
      label: 'Roof Sample',
      color: '#2c3e50',
      size: 1,
      onColorChange: () => {},
      onSizeChange: () => {}
    },
    ...nodeDefaults,
  },
]

const initialEdges = []

const InteractiveRoofEditor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as any)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  )

  const handleColorChange = useCallback((nodeId: string, newColor: string) => {
    setNodes((nds: any) =>
      nds.map((node: any) =>
        node.id === nodeId && node.type === 'roofPanel'
          ? { ...node, data: { ...node.data, color: newColor } }
          : node
      )
    )
  }, [setNodes])

  const handleSizeChange = useCallback((nodeId: string, newSize: number) => {
    setNodes((nds: any) =>
      nds.map((node: any) =>
        node.id === nodeId && node.type === 'roofPanel'
          ? { ...node, data: { ...node.data, size: newSize } }
          : node
      )
    )
  }, [setNodes])

  // Update nodes with handlers
  const nodesWithHandlers = nodes.map(node => {
    if (node.type === 'roofPanel') {
      return {
        ...node,
        data: {
          ...node.data,
          onColorChange: handleColorChange,
          onSizeChange: handleSizeChange
        }
      }
    }
    return node
  })

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodesWithHandlers}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap 
          nodeColor={(node: any) => {
            if (node.type === 'roofPanel') return node.data?.color || '#2c3e50'
            if (node.type === 'roofStructure') return '#8b4513'
            return '#999'
          }}
        />
        
        <Panel position="top-left" className="bg-white rounded-lg shadow-lg p-4 m-4">
          <div className="space-y-3">
            {/* RRS Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-b from-blue-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-sm">Reliable Roofing</div>
                <div className="text-xs text-gray-500">Solutions</div>
              </div>
            </div>
            
            {/* Designer Info */}
            <div className="border-t pt-2">
              <h4 className="font-medium text-gray-700 text-sm mb-2">Simple Roof Sample</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div>Triangle Roof: 1</div>
                <div>Color: {nodes[0]?.data?.color || '#2c3e50'}</div>
                <div>Size: {Math.round((nodes[0]?.data?.size || 1) * 100)}%</div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="text-xs text-gray-500 space-y-1">
              <div>• Change color with picker or presets</div>
              <div>• Adjust size with slider</div>
              <div>• Drag to move triangle</div>
            </div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  )
}

export default InteractiveRoofEditor
