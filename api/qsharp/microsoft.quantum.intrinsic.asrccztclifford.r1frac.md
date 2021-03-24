---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.R1Frac
title: R1Frac operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: R1Frac
qsharp.summary: >-
  Applies a rotation about the $\ket{1}$ state by an angle specified
  as a dyadic fraction.

  \begin{align}
  R_1(n, k) \mathrel{:=}
  \operatorname{diag}(1, e^{i \pi k / 2^n}).
  \end{align}

  > [!WARNING]
  > This operation uses the **opposite** sign convention from
  > @"microsoft.quantum.intrinsic.r", and does not include the
  > factor of $1/2$ included by @"microsoft.quantum.intrinsic.r1".
---

# R1Frac operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies a rotation about the $\ket{1}$ state by an angle specifiedas a dyadic fraction.\begin{align}R_1(n, k) \mathrel{:=}\operatorname{diag}(1, e^{i \pi k / 2^n}).\end{align}> [!WARNING]> This operation uses the **opposite** sign convention from> @"microsoft.quantum.intrinsic.r", and does not include the> factor of $1/2$ included by @"microsoft.quantum.intrinsic.r1".

```qsharp
operation R1Frac (numerator : Int, power : Int, qubit : Qubit) : Unit is Adj + Ctl
```


## Input

### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

Numerator in the dyadic fraction representation of the angleby which the qubit is to be rotated.


### power : [Int](xref:microsoft.quantum.lang-ref.int)

Power of two specifying the denominator of the angle by whichthe qubit is to be rotated.


### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Equivalent to:```qsharpRFrac(PauliZ, -numerator, denominator + 1, qubit);RFrac(PauliI, numerator, denominator + 1, qubit);```