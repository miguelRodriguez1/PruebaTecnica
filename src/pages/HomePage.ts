import { Page,Locator } from "@playwright/test";
import { HomeLocators } from "./locators/HomeLocators";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage {
    private readonly home:Locator;
    private readonly buttonEmpresas:Locator;
    private readonly productos:Locator;
    private readonly recaudo:Locator;
    constructor (page:Page){
        super (page);
        this.home=page.locator(HomeLocators.home)
        this.buttonEmpresas=page.locator(HomeLocators.buttonEmpresas)
        this.productos=page.locator(HomeLocators.productos)
        this.recaudo=page.locator(HomeLocators.recaudo)
    }

    async ValidaIngreso(){
        await this.loadWeb('https://www.bancocajasocial.com')
        await this.expectVisible(HomeLocators.home)
    }

    async ValidaButtonEmpresas(){
        await this.expectVisible(HomeLocators.buttonEmpresas)
        await this.ClickOn(HomeLocators.buttonEmpresas)
    }
     async ValidaButtonProductos(){
        await this.expectVisible(HomeLocators.productos)
        await this.ClickOn(HomeLocators.productos)   
    }

    

    async ValidaButtonRecaudos(){
        await this.expectVisible(HomeLocators.PagosRecaudos)
        await this.expectVisible(HomeLocators.recaudo)
        await this.ClickOn(HomeLocators.recaudo)   
        
    }
}