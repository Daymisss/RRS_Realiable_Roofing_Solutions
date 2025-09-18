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

// Custom Roof Panel Node
const RoofPanelNode = ({ data, selected }: { data: any; selected: boolean }) => {
  const [color, setColor] = useState(data.color || '#2c3e50')
  const [roofType, setRoofType] = useState(data.roofType || 'corrugated')
  const [zoomLevel, setZoomLevel] = useState(data.zoomLevel || 1)

  const handleColorChange = (newColor: string) => {
    setColor(newColor)
    data.onColorChange?.(data.id, newColor)
  }

  const handleRoofTypeChange = (newType: string) => {
    setRoofType(newType)
    data.onRoofTypeChange?.(data.id, newType)
  }

  const handleZoomChange = (newZoom: number) => {
    setZoomLevel(newZoom)
    data.onZoomChange?.(data.id, newZoom)
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-lg border-2 p-4 min-w-[200px]"
      style={{ 
        borderColor: selected ? '#3b82f6' : '#e5e7eb',
        background: `linear-gradient(135deg, ${color} 0%, ${color}dd 50%, ${color}aa 100%)`
      }}
    >
      <div className="space-y-3">
        {/* Color Control */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-white">Color:</span>
          <input
            type="color"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-8 h-8 rounded border-2 border-white cursor-pointer"
          />
          <div className="flex space-x-1">
            {['#2c3e50', '#34495e', '#1a252f', '#8b4513', '#654321', '#ff0071'].map((presetColor) => (
              <button
                key={presetColor}
                onClick={() => handleColorChange(presetColor)}
                className="w-6 h-6 rounded border-2 border-white hover:border-blue-300"
                style={{ backgroundColor: presetColor }}
              />
            ))}
          </div>
        </div>

        {/* Roof Type Control */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-white">Type:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => handleRoofTypeChange('corrugated')}
              className={`px-2 py-1 rounded text-xs ${
                roofType === 'corrugated' ? 'bg-white text-gray-800' : 'bg-white/20 text-white'
              }`}
            >
              Corrugated
            </button>
            <button
              onClick={() => handleRoofTypeChange('flat')}
              className={`px-2 py-1 rounded text-xs ${
                roofType === 'flat' ? 'bg-white text-gray-800' : 'bg-white/20 text-white'
              }`}
            >
              Flat
            </button>
          </div>
        </div>

        {/* Zoom Level Control */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-white">Zoom:</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={zoomLevel}
            onChange={(e) => handleZoomChange(parseFloat(e.target.value))}
            className="flex-1"
          />
          <span className="text-xs text-white">{Math.round(zoomLevel * 100)}%</span>
        </div>

        {/* 3D Preview */}
        <div className="mt-3 p-2 bg-black/20 rounded">
          <div className="text-center text-white text-xs font-medium mb-2">Preview</div>
          <div 
            className="w-full h-16 rounded"
            style={{
              background: `linear-gradient(45deg, ${color} 0%, ${color}dd 50%, ${color}aa 100%)`,
              transform: `scale(${zoomLevel})`,
              backgroundImage: roofType === 'corrugated' 
                ? 'repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.1) 2px, transparent 4px)'
                : 'none'
            }}
          />
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
    position: { x: 0, y: 150 },
    data: { 
      label: 'Main Roof Panel',
      color: '#2c3e50',
      roofType: 'corrugated',
      zoomLevel: 1,
      onColorChange: () => {},
      onRoofTypeChange: () => {},
      onZoomChange: () => {}
    },
    ...nodeDefaults,
  },
  {
    id: '2',
    type: 'roofPanel',
    position: { x: 300, y: 0 },
    data: { 
      label: 'Side Panel',
      color: '#34495e',
      roofType: 'corrugated',
      zoomLevel: 1,
      onColorChange: () => {},
      onRoofTypeChange: () => {},
      onZoomChange: () => {}
    },
    ...nodeDefaults,
  },
  {
    id: '3',
    type: 'roofPanel',
    position: { x: 300, y: 150 },
    data: { 
      label: 'End Panel',
      color: '#1a252f',
      roofType: 'flat',
      zoomLevel: 1,
      onColorChange: () => {},
      onRoofTypeChange: () => {},
      onZoomChange: () => {}
    },
    ...nodeDefaults,
  },
  {
    id: '4',
    type: 'roofStructure',
    position: { x: 300, y: 300 },
    data: { label: 'Support Beam' },
    ...nodeDefaults,
  },
]

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
  },
]

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

  const handleRoofTypeChange = useCallback((nodeId: string, newType: string) => {
    setNodes((nds: any) =>
      nds.map((node: any) =>
        node.id === nodeId && node.type === 'roofPanel'
          ? { ...node, data: { ...node.data, roofType: newType } }
          : node
      )
    )
  }, [setNodes])

  const handleZoomChange = useCallback((nodeId: string, newZoom: number) => {
    setNodes((nds: any) =>
      nds.map((node: any) =>
        node.id === nodeId && node.type === 'roofPanel'
          ? { ...node, data: { ...node.data, zoomLevel: newZoom } }
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
          onRoofTypeChange: handleRoofTypeChange,
          onZoomChange: handleZoomChange
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
          nodeColor={(node) => {
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
              <h4 className="font-medium text-gray-700 text-sm mb-2">Interactive Roof Designer</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div>Panels: {nodes.filter(n => n.type === 'roofPanel').length}</div>
                <div>Structures: {nodes.filter(n => n.type === 'roofStructure').length}</div>
                <div>Connections: {edges.length}</div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="text-xs text-gray-500 space-y-1">
              <div>• Drag nodes to move them</div>
              <div>• Click panels to change color & type</div>
              <div>• Use zoom slider to adjust scale</div>
              <div>• Drag from handles to connect</div>
            </div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  )
}

export default InteractiveRoofEditor
