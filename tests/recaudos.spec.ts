// tests/recaudos.spec.ts
//import { Given, When, Then } from '@cucumber/cucumber'
import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage.ts';
import {RecaudosPage} from '../src/pages/RecaudosPage.ts';
import { ValidatePDF}from '../src/pages/ValidatePDF.ts';

/*
let home: HomePage;
let recaudos: RecaudosPage;

Given('el usuario accede al sitio web del Banco Caja Social', async function () {
  home = new HomePage(this.page);
  await home.ValidaIngreso();
});

Given('navega a la sección Empresas > Productos > Recaudos', async function () {
  await home.ValidaButtonEmpresas();
  await home.ValidaButtonProductos();
  await home.ValidaButtonRecaudos();
});

When('abre el documento de Reglamento de Recaudos', async function () {
  recaudos = new RecaudosPage(this.page);
  await recaudos.ValidaIngreso();
  await recaudos.openReglamentoPDF();
});

Then('el documento se abre correctamente en una nueva pestaña', async function () {
  const isValid = await validatePDF(this.page);
  expect(isValid).toBe(true);
});

*/
test.describe('Validación de Reglamento de Recaudos', () => {
  test('Debe abrir el PDF correctamente', async ({ page }) => {
    const home= new HomePage(page);
    await home.ValidaIngreso()
    await home.ValidaButtonEmpresas()
    await home.ValidaButtonProductos()
    await home.ValidaButtonRecaudos()
    const recaudos = new RecaudosPage(page);
    await recaudos.ValidaIngreso();
    await recaudos.openReglamentoPDF();
    
    //const validatePDF = new ValidatePDF(page);
    //validatePDF.validaTituloPDF();
    })
  }

  
);

