---
uid: Microsoft.Quantum.Intrinsic.RFrac
title: RFrac operation
ms.date: 6/5/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: RFrac
qsharp.summary: >-
  Applies a rotation about the given Pauli axis by an angle specified
  as a dyadic fraction.
---

# RFrac operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type1.Core](https://nuget.org/packages/Microsoft.Quantum.Type1.Core)


Applies a rotation about the given Pauli axis by an angle specifiedas a dyadic fraction.

```qsharp
operation RFrac (pauli : Pauli, numerator : Int, power : Int, qubit : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}R_{\mu}(n, k) \mathrel{:=}e^{i \pi n \sigma_{\mu} / 2^k},\end{align}where $\mu \in \{I, X, Y, Z\}$.> [!WARNING]> This operation uses the **opposite** sign convention from> @"microsoft.quantum.intrinsic.r".

## Input

### pauli : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

Pauli operator to be exponentiated to form the rotation.


### numerator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Numerator in the dyadic fraction representation of the angleby which the qubit is to be rotated. This angle is expressed in radians.


### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Power of two specifying the denominator of the angle by whichthe qubit is to be rotated. This angle is expressed in radians.


### qubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Equivalent to:```qsharp// PI() is a Q# function that returns an approximation of π.R(pauli, -PI() * IntAsDouble(numerator) / IntAsDouble(2 ^ (power - 1)), qubit);```