declare var M

export class MaterialService {
  static toast(error, classes: string = '') {
    const html =
      (error.error && error.error.message) ||
      error.message ||
      error ||
      'Unexpected Error'
    M.toast({html, classes})
  }

  static updateTextInputs() {
    M.updateTextFields()
  }

  static initModals(elems) {
    M.Modal.init(elems)
  }

  static openModal(elem) {
    const instance = M.Modal.getInstance(elem)
    instance.open()
  }
}
