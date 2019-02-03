export function configureEnzyme() {
  const Enzyme = require("enzyme");
  const Adapter = require("enzyme-adapter-react-16");
  Enzyme.configure({adapter: new Adapter()});

  beforeEach(() => {
    console.error = jest.fn();
    console.warn = jest.fn();
  });
  afterEach(() => {
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });
}
