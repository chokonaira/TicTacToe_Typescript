module.exports = {
  createInterface: jest.fn().mockReturnValue({
    question: jest.fn().mockImplementationOnce((_questionText, cb) => { cb('1') }),
    close: jest.fn().mockImplementationOnce(() => undefined)
  })
};
