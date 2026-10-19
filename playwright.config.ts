import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    timeout: 30000,

    workers: 1,

    fullyParallel: false,

    retries: 1,

    reporter: [
        ['html'],
        ['list']
    ],

    use: {

        trace: 'on-first-retry',

        screenshot: 'only-on-failure'

    },

    projects: [

        {
            name: 'api',

            testMatch: [
                'tests/api/**/*.spec.ts'
            ]
        },

        {
            name: 'ui',

            testMatch: [
                'tests/ui/**/*.spec.ts',
                'tests/integration/**/*.spec.ts'
            ],

            use: {

                ...devices['Desktop Chrome']

            }

        }

    ]

});