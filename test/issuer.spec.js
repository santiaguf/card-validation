import issuer from '../src/issuer';

describe('issuer', () => {
  it('debería ser un objeto', () => {
    expect(typeof issuer).toBe('object');
  });

  describe('issuer.getBank', () => {
    it('debería ser una función', () => {
      expect(typeof issuer.getBank).toBe('function');
    });

    it('debería retornar "Visa" para "4083952015263"', () => {
      expect(issuer.getBank(4083952015263)).toBe('Visa');
    });

    it('debería retornar "Diners Club / Carte Blanche" para "30569309025904"', () => {
      expect(issuer.getBank(30569309025904)).toBe('Diners Club / Carte Blanche');
    });

    it('debería retornar "MasterCard" para "5555555555554444"', () => {
      expect(issuer.getBank(5555555555554444)).toBe('MasterCard');
    });

    it('debería retornar "American Express" para "370000000100018"', () => {
      expect(issuer.getBank(370000000100018)).toBe('American Express');
    });

    it('debería retornar "Discover" para "6011601160116611"', () => {
      expect(issuer.getBank(6011601160116611)).toBe('Discover');
    });

    it('debería retornar "JCB" para "3569990010095841"', () => {
      expect(issuer.getBank(3569990010095841)).toBe('JCB');
    });

    it('debería retornar "ingrese más digitos" para "3"', () => {
      expect(issuer.getBank(3)).toBe('ingrese más digitos');
    });

    it('debería retornar "INVÁLIDA" para "88322"', () => {
      expect(issuer.getBank(88322)).toBe('INVÁLIDA');
    });

    it('debería retornar "Diners Club / enRoute" para "201460"', () => {
      expect(issuer.getBank(201460)).toBe('Diners Club / enRoute');
    });
  });
});