export default defineAppConfig({
  ui: {
    formGroup: {
      label: {
        base: 'block font-medium text-white',
      },
    },
    input: {
      color: {
        white: {
          outline:
            'shadow-sm bg-white dark:bg-gray-900 text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
    },
    select: {
      color: {
        white: {
          outline:
            'shadow-sm bg-white dark:bg-gray-900 text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
      variant: {
        outline:
          'shadow-sm bg-transparent text-white dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
      },
    },
    selectMenu: {
      input:
        'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
      option: {
        color: 'text-white',
        active: 'bg-dark',
        icon: {
          active: 'text-white',
        },
        selectedIcon: {
          base: 'h-5 w-5 text-white flex-shrink-0',
        },
      },
    },
    notifications: {
      position: 'top-10 bottom-auto',
    },
  },
})
