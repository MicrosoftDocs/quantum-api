---
uid: Microsoft.Quantum.Arithmetic.ApplyFunctionWithLookupTable
title: ApplyFunctionWithLookupTable function
ms.date: 8/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyFunctionWithLookupTable
qsharp.summary: >-
  This function creates a select-swap lookup table operator for the function that you want to approximate, as well as
  the parameters required to make the two FixedPoint registers that need to be used as inputs to the operator.
  This is so that it is in similar to the other typical Q# arithmetic function (a larger discussion can be had
  as to whether that can be changed). The circuit for the operator can be found in Fig. 1c in arXiv:1812.00954.
---

# ApplyFunctionWithLookupTable function

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


This function creates a select-swap lookup table operator for the function that you want to approximate, as well asthe parameters required to make the two FixedPoint registers that need to be used as inputs to the operator.This is so that it is in similar to the other typical Q# arithmetic function (a larger discussion can be hadas to whether that can be changed). The circuit for the operator can be found in Fig. 1c in arXiv:1812.00954.

```qsharp
function ApplyFunctionWithLookupTable (func : (Double -> Double), domain : (Double, Double), epsIn : Double, epsOut : Double, numSwapBits : Int) : Microsoft.Quantum.Arithmetic.FunctionWithLookupTable
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


### numSwapBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of bits of the input register that will be used in the SWAP section of the circuits. Another way of lookingat this is that in step in the SELECT section of the circuit in Fig 1c of arXiv:1812.00954, we will encode 2^numSwapBitsencoded



## Output : [FunctionWithLookupTable](xref:Microsoft.Quantum.Arithmetic.FunctionWithLookupTable)



## Example

The following code creates a quantum operation based on `ExpD` in the (inclusive) range from `-5.0` to `5.0` with an input error of `1e-3` and an output error of `1e-4`. It uses `2` SWAP bits for the implementation.```qsharp// Create operation from lookup tablelet domain = (-5.0, 5.0);let epsIn = 1e-3;let epsOut = 1e-4;let lookup = ApplyFunctionWithLookupTable(ExpD, domain, epsIn, epsOut, 2);// Allocate qubitsuse input = Qubit[lookup::IntegerBitsIn + lookup::FractionalBitsIn];use output = Qubit[lookup::IntegerBitsOut + lookup::FractionalBitsOut];// Represent qubit registers as fixed pointslet inputFxP = FixedPoint(lookup::IntegerBitsIn, input);let outputFxP = FixedPoint(lookup::IntegerBitsOut, output);// Apply operationlookup::Apply(inputFxP, outputFxP);```

## Remarks

The operator guarantees that given an input value $x$ and a function $f(x)$,it will compute $\hat{f}(\hat{x})$ where $\hat{f}$ is an approximation of $f$ with a maximum error of epsOut and $\hat{x}$ is anapproximation of the input value $\hat{x}$ with a maximum error of epsIn. This is useful for most reasonably behavedfunctions, but note that it computes $\hat{f}(\hat{x})$ and not $\hat{f}(x)$ so if the domain function is very oscillatory and/orhas funky derivatives then it may have high errors.