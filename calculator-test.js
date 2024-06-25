
describe('calculates loan rate tests', function (){
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 10,
      rate: 5.0
    };
    expect(calculateMonthlyPayment(values)).toEqual('106.07');  
  });

  it('should calculate low monthly rate correctly', function(){
    const values = {
      amount: 2000,
      years: 10,
      rate: 2.3
    };
    expect(calculateMonthlyPayment(values)).toEqual('18.67');
  })

  it('should calculate high monthly rate correctly', function(){
    const values = {
      amount: 2000000,
      years: 10,
      rate: 99.99
    };
    expect(calculateMonthlyPayment(values)).toEqual('166661.24');
  })

  it('should calculate extremely low interest rate correctly', function(){
    const values = {
      amount: 200000,
      years: 30,
      rate: 0.1
    };
    expect(calculateMonthlyPayment(values)).toEqual('563.95');
  })
  
})


describe('calculates loan payment to 2 decimal places test', function(){
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });

})


