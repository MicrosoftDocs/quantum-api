---
uid: Microsoft.Quantum.Arithmetic.ApplyFunctionWithLookupTable
title: ApplyFunctionWithLookupTable function
ms.date: 10/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyFunctionWithLookupTable
qsharp.summary: >-
  This function creates a lookup table operator for the function that you want to approximate, as well as
  the parameters required to make the two `FixedPoint` registers that need to be used as inputs to the operator.
---

# ApplyFunctionWithLookupTable function

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


This function creates a lookup table operator for the function that you want to approximate, as well asthe parameters required to make the two `FixedPoint` registers that need to be used as inputs to the operator.

```qsharp
function ApplyFunctionWithLookupTable (func : (Double -> Double), domain : (Double, Double), epsIn : Double, epsOut : Double) : Microsoft.Quantum.Arithmetic.FunctionWithLookupTable
```


## Input

### func : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals) -> [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The Q# arithmetic function that you want to implement with the lookup table


### domain : ([Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals),[Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals))

A tuple consisting of the minimum and maximum values of the input values to the function


### epsIn : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The maximum allowed error of the input value to the computation (i.e. |x'-x|)


### epsOut : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The maximum allowed error of the output without taking into account the error in input value (i.e. |f'(x')-f(x')|)



## Output : [FunctionWithLookupTable](xref:Microsoft.Quantum.Arithmetic.FunctionWithLookupTable)



## Example

The following code creates a quantum operation based on `ExpD` in the (inclusive) range from `-5.0` to `5.0` with an input error of `1e-3` and an output error of `1e-4`.```qsharp// Create operation from lookup tablelet domain = (-5.0, 5.0);let epsIn = 1e-3;let epsOut = 1e-4;let lookup = ApplyFunctionWithLookupTable(ExpD, domain, epsIn, epsOut);// Allocate qubitsuse input = Qubit[lookup::IntegerBitsIn + lookup::FractionalBitsIn];use output = Qubit[lookup::IntegerBitsOut + lookup::FractionalBitsOut];// Represent qubit registers as fixed pointslet inputFxP = FixedPoint(lookup::IntegerBitsIn, input);let outputFxP = FixedPoint(lookup::IntegerBitsOut, output);// Apply operationlookup::Apply(inputFxP, outputFxP);```

## Remarks

The operator guarantees that given an input value $x$ and a function $f(x)$,it will compute $\hat{f}(\hat{x})$ where $\hat{f}$ is an approximation of $f$ with a maximum error of epsOut and $\hat{x}$ is anapproximation of the input value $\hat{x}$ with a maximum error of `epsIn`. This is useful for most reasonably behavedfunctions, but note that it computes $\hat{f}(\hat{x})$ and not $\hat{f}(x)$ so if the domain function is very oscillatory and/orhas funky derivatives then it may have high errors.