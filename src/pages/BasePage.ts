import { Page,expect } from "@playwright/test";


export class BasePage {

    protected readonly page: Page 

    constructor (page:Page){
       this.page=page 
    }

    async loadWeb(url:string){
        await this.page.goto(url)
    }

    async ClickOn(selector:string){
        await this.page.click(selector)
    }

    async expectVisible(selector:string){
        await this.page.locator(selector).hover()
        await expect(this.page.locator(selector)).toBeVisible(); 
       
    }

 

    async ListaActiva(selector:string,atribute:string){
        await this.page.locator(selector).waitFor();
        const lista = this.page.locator(selector).getAttribute(atribute);
        if (await lista === 'true') {
            return true
        } else {
            return false
        }
    }


}

