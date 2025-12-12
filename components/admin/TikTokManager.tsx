'use client'

import { useState, useEffect } from 'react'
import { FiPlus, FiTrash2, FiSave, FiEdit2, FiX, FiCheck, FiAlertCircle } from 'react-icons/fi'

interface TikTokConfig {
  enabled: boolean
  username: string
  videoIds: string[]
  delaySeconds: number
  title: string
}

export default function TikTokManager() {
  const [config, setConfig] = useState<TikTokConfig>({
    enabled: false,
    username: '',
    videoIds: [],
    delaySeconds: 5,
    title: 'Check Us Out on TikTok!',
  })
  const [newVideoId, setNewVideoId] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    // Load current config from localStorage or API
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      // Try to load from API first (if backend exists)
      const response = await fetch('/api/admin/tiktok-config')
      if (response.ok) {
        const data = await response.json()
        setConfig(data)
        return
      }
    } catch (error) {
      // Fallback to localStorage
    }

    // Load from localStorage as fallback
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tiktok-admin-config')
      if (saved) {
        try {
          setConfig(JSON.parse(saved))
        } catch (error) {
          console.error('Failed to load config:', error)
        }
      }
    }
  }

  const saveConfig = async () => {
    setIsSaving(true)
    setMessage(null)

    try {
      // Try to save to API first
      const response = await fetch('/api/admin/tiktok-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Configuration saved successfully!' })
      } else {
        throw new Error('API save failed')
      }
    } catch (error) {
      // Fallback to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('tiktok-admin-config', JSON.stringify(config))
        setMessage({ type: 'success', text: 'Configuration saved to local storage!' })
      }
    }

    setIsSaving(false)
    setTimeout(() => setMessage(null), 3000)
  }

  const addVideoId = () => {
    if (newVideoId.trim()) {
      setConfig({
        ...config,
        videoIds: [...config.videoIds, newVideoId.trim()],
      })
      setNewVideoId('')
    }
  }

  const removeVideoId = (index: number) => {
    setConfig({
      ...config,
      videoIds: config.videoIds.filter((_, i) => i !== index),
    })
  }

  const updateVideoId = (index: number, value: string) => {
    const updated = [...config.videoIds]
    updated[index] = value
    setConfig({
      ...config,
      videoIds: updated,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">TikTok Pop-up Manager</h2>
          <p className="text-gray-600 mt-1">Manage TikTok pop-up settings and videos</p>
        </div>
        <button
          onClick={saveConfig}
          disabled={isSaving}
          className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
        >
          <FiSave size={18} />
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>

      {message && (
        <div
          className={`flex items-center gap-2 p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          <FiAlertCircle size={20} />
          <span>{message.text}</span>
        </div>
      )}

      {/* Enable/Disable Toggle */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Enable TikTok Pop-up</h3>
            <p className="text-sm text-gray-600 mt-1">
              Turn on/off the TikTok pop-up on your website
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.enabled}
              onChange={(e) => setConfig({ ...config, enabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
      </div>

      {/* Basic Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Basic Settings</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            TikTok Username
          </label>
          <input
            type="text"
            value={config.username}
            onChange={(e) => setConfig({ ...config, username: e.target.value })}
            placeholder="dncltechzone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Without @ symbol</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pop-up Title
          </label>
          <input
            type="text"
            value={config.title}
            onChange={(e) => setConfig({ ...config, title: e.target.value })}
            placeholder="Check Us Out on TikTok!"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delay (seconds)
          </label>
          <input
            type="number"
            value={config.delaySeconds}
            onChange={(e) =>
              setConfig({ ...config, delaySeconds: parseInt(e.target.value) || 5 })
            }
            min="0"
            max="30"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">How long to wait before showing pop-up</p>
        </div>
      </div>

      {/* Video IDs Management */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">TikTok Videos</h3>
          <span className="text-sm text-gray-600">{config.videoIds.length} video(s)</span>
        </div>

        {/* Add New Video ID */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newVideoId}
            onChange={(e) => setNewVideoId(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addVideoId()}
            placeholder="Enter TikTok video ID (e.g., 7234567890123456789)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            onClick={addVideoId}
            className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <FiPlus size={18} />
            <span>Add</span>
          </button>
        </div>

        {/* Video IDs List */}
        {config.videoIds.length > 0 ? (
          <div className="space-y-2">
            {config.videoIds.map((videoId, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <input
                  type="text"
                  value={videoId}
                  onChange={(e) => updateVideoId(index, e.target.value)}
                  className="flex-1 px-3 py-1 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <a
                  href={`https://www.tiktok.com/@${config.username}/video/${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  View
                </a>
                <button
                  onClick={() => removeVideoId(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Remove video"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No videos added yet. Add your first TikTok video ID above.</p>
          </div>
        )}

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>How to get Video ID:</strong> Open your TikTok video, copy the URL, and extract
            the number after <code className="bg-blue-100 px-1 rounded">/video/</code>
          </p>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview Configuration</h3>
        <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
          <div>
            <span className="font-semibold">Status:</span>{' '}
            <span className={config.enabled ? 'text-green-600' : 'text-gray-600'}>
              {config.enabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
          <div>
            <span className="font-semibold">Username:</span> @{config.username || 'not set'}
          </div>
          <div>
            <span className="font-semibold">Videos:</span> {config.videoIds.length}
          </div>
          <div>
            <span className="font-semibold">Delay:</span> {config.delaySeconds} seconds
          </div>
        </div>
      </div>
    </div>
  )
}

