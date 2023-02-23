---
uid: Microsoft.Quantum.Arithmetic.FunctionWithLookupTable
title: FunctionWithLookupTable user defined type
ms.date: 2/23/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: FunctionWithLookupTable
qsharp.summary: >-
  The return type when making a lookup table. This contains the operation that
  makes the lookup table circuit, as well as all the parameters required to make
  the two FixedPoint registers that need to be used as inputs and outputs to the
  operator.
---

# FunctionWithLookupTable user defined type

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


The return type when making a lookup table. This contains the operation thatmakes the lookup table circuit, as well as all the parameters required to makethe two FixedPoint registers that need to be used as inputs and outputs to theoperator.

```qsharp

newtype FunctionWithLookupTable = (IntegerBitsIn : Int, FractionalBitsIn : Int, IntegerBitsOut : Int, FractionalBitsOut : Int, Apply : ((Microsoft.Quantum.Arithmetic.FixedPoint, Microsoft.Quantum.Arithmetic.FixedPoint) => Unit is Adj));
```



## Named Items

### IntegerBitsIn : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)


### FractionalBitsIn : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)


### IntegerBitsOut : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)


### FractionalBitsOut : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)


### Apply : ([FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint),[FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj



## Remarks

The reason we have this return type structure is so that the operator is similarto the other typical Q# arithmetic function implementations (a larger discussioncan had as to whether that can be changed)