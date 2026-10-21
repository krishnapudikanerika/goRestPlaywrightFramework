import { Page, Locator, expect }
from '@playwright/test';

export class ConsolePage {

    readonly page: Page;

    readonly signInLink: Locator;

    readonly continueWithGithubLink: Locator;

    readonly usernameTextBox: Locator;

    readonly passwordTextBox: Locator;

    readonly githubSignInButton: Locator;

    readonly consoleLink: Locator;

    readonly urlTextBox: Locator;

    readonly sendButton: Locator;

    readonly statusBadge: Locator;

    readonly responseBody: Locator;

    constructor(page: Page) {

        this.page = page;

        this.signInLink =
            page.getByRole('banner')
                .getByRole('link', {
                    name: 'Sign in'
                });

        this.continueWithGithubLink =
            page.getByRole('link', {
                name: /Continue with GitHub/
            });

        this.usernameTextBox =
            page.getByRole('textbox', {
                name: 'Username or email address'
            });

        this.passwordTextBox =
            page.getByRole('textbox', {
                name: 'Password'
            });

        this.githubSignInButton =
            page.getByRole('button', {
                name: 'Sign in',
                exact: true
            });

        this.consoleLink =
            page.getByRole('link', {
                name: 'Console',
                exact: true
            });

        this.urlTextBox =
            page.getByRole('textbox', {
                name: 'URL'
            });

        this.sendButton =
            page.getByRole('button', {
                name: 'Send'
            });

        this.statusBadge =
            page.locator('#rsp_status_badge');

        this.responseBody =
            page.locator('#rsp_body');
    }

    async login(
        username: string,
        password: string
    ) {

        await this.signInLink.click();

        await this.continueWithGithubLink.click();

        await this.usernameTextBox.fill(
            username
        );

        await this.passwordTextBox.fill(
            password
        );

        await this.githubSignInButton.click();

    }

    async navigateToConsole() {

      
        await this.consoleLink.click();

    }

    async enterApiUrl(
        apiUrl: string
    ) {

        await this.urlTextBox.fill(
            apiUrl
        );

    }

    async clickSend() {

        await this.sendButton.click();

    }

    async validateStatus(
        expectedStatus: number
    ) {

        await expect(
            this.statusBadge
        ).toContainText(
            expectedStatus.toString()
        );

    }

    async validateUserExists(
        userName: string
    ) {

        await expect(
            this.responseBody
        ).toContainText(
            userName
        );

    }

}