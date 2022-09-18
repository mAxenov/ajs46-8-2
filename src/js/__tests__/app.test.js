import ErrorRepository from '../ErrorRepository';


const errorRep = new ErrorRepository();
test('Код ошибки есть', () => {
  expect(errorRep.translate('001')).toBe('Код первый');
});

test('Кода ошибки нет', () => {
  const received = errorRep.translate('004');
  expect(errorRep.translate('004')).toBe('Unknown error');
});