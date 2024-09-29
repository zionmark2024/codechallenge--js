// This function calculates the net salary based on the provided inputs.
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates
    const taxRates = [
      { min: 0, max: 24000, rate: 0.1 },
      { min: 24001, max: 32333, rate: 0.25 },
      { min: 32334, max: 500000, rate: 0.3 },
      { min: 500001, max: 800000, rate: 0.325 },
      { min: 800001, max: Infinity, rate: 0.35 },
    ];
  
    // Calculate tax based on the basic salary
    let tax = 0;
    for (const rate of taxRates) {
      if (basicSalary > rate.min) {
        const taxableAmount = Math.min(basicSalary, rate.max) - rate.min;
        tax += taxableAmount * rate.rate;
      }
    }
  
    // Other deductions and calculations
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - tax - nhif - nssf;
  
    return {
      Tax: tax.toFixed(2),
      NHIF: nhif.toFixed(2),
      NSSF: nssf.toFixed(2),GrossSalary: grossSalary.toFixed(2),
      NetSalary: netSalary.toFixed(2),
    };
  }
  
  // Helper function to calculate NHIF deduction
  function calculateNHIF(grossPay) {
    // NHIF rates
    const nhifRates = [
      { min: 0, max: 5999, deduction: 150 },
      // Add other rate ranges...
    ];
  
    // Find the applicable rate
    const applicableRate = nhifRates.find((rate) => grossPay >= rate.min && grossPay <= rate.max);
  
    return applicableRate ? applicableRate.deduction : 0;
  }
  
  // Helper function to calculate NSSF deduction