declare var M

export class MaterialService {
  static toast(error, classes: string = '') {
    let html = ''
    if (error.error && error.error.errors) {
      html = error.error.errors[0].msg
    } else {
      html = 'Unexpected Error'
    }

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
