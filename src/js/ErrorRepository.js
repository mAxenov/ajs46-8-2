export default class ErrorRepository {
  constructor() {
    this.ErrRepository = new Map(
      [['001', 'Код первый'],
      ['002', 'Код второй'],
      ['003', 'Код третий']]
    );
  }

  translate(code) {
    if (this.ErrRepository.has(code)) {
      return this.ErrRepository.get(code);
    } else {
      return 'Unknown error';
    }
  }
}


