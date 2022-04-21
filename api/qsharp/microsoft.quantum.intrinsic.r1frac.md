---
uid: Microsoft.Quantum.Intrinsic.R1Frac
title: R1Frac operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: R1Frac
qsharp.summary: >-
  Applies a rotation about the $\ket{1}$ state by an angle specified
  as a dyadic fraction.
---

# R1Frac operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Applies a rotation about the $\ket{1}$ state by an angle specifiedas a dyadic fraction.

```qsharp
operation R1Frac (numerator : Int, power : Int, qubit : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}R_1(n, k) \mathrel{:=}\operatorname{diag}(1, e^{i \pi k / 2^n}).\end{align}> [!WARNING]> This operation uses the **opposite** sign convention from> @"microsoft.quantum.intrinsic.r", and does not include the> factor of $1/ 2$ included by @"microsoft.quantum.intrinsic.r1".

## Input

### numerator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Numerator in the dyadic fraction representation of the angleby which the qubit is to be rotated.


### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Power of two specifying the denominator of the angle by whichthe qubit is to be rotated.


### qubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Equivalent to:```qsharpRFrac(PauliZ, -numerator, denominator + 1, qubit);RFrac(PauliI, numerator, denominator + 1, qubit);```