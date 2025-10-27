'use client'

import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

export type NotificationType = 'success' | 'error'

export interface NotificationData {
  id: string
  type: NotificationType
  title: string
  message: string
}

interface NotificationProps {
  notification: NotificationData
  onClose: () => void
}

export default function Notification({ notification, onClose }: NotificationProps) {
  const { type, title, message } = notification

  const icon = type === 'success' ? (
    <CheckCircleIcon aria-hidden="true" className="size-6 text-green-400" />
  ) : (
    <XCircleIcon aria-hidden="true" className="size-6 text-red-400" />
  )

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={true}
          enter="transform transition ease-out duration-300"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-gray-800 shadow-lg outline outline-1 -outline-offset-1 outline-white/10">
            <div className="p-4">
              <div className="flex items-start">
                <div className="shrink-0">
                  {icon}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-sm text-gray-400">{message}</p>
                </div>
                <div className="ml-4 flex shrink-0">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex rounded-md text-gray-400 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

