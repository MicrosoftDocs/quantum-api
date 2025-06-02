---
uid: Qdk.Std.Intrinsic.R1Frac
title: R1Frac operation
description: "Q# R1Frac operation: Applies a rotation about the |1⟩ state by an angle specified as a dyadic fraction.  WARNING: This operation uses the **opposite** sign convention from Std.Intrinsic.R."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: R1Frac
qsharp.summary: "Applies a rotation about the |1⟩ state by an angle specified as a dyadic fraction.  WARNING: This operation uses the **opposite** sign convention from Std.Intrinsic.R."
---

# R1Frac operation

Fully qualified name: Std.Intrinsic.R1Frac

```qsharp
operation R1Frac(numerator : Int, power : Int, qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies a rotation about the |1⟩ state by an angle specified
as a dyadic fraction.

WARNING:
This operation uses the **opposite** sign convention from
Std.Intrinsic.R.

## Input
### numerator
Numerator in the dyadic fraction representation of the angle
by which the qubit is to be rotated. This angle is expressed in radians.
### power
Power of two specifying the denominator of the angle by which
the qubit is to be rotated. This angle is expressed in radians.
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    R_1(n, k) \mathrel{:=}
    \operatorname{diag}(1, e^{i \pi n / 2^k}).
\end{align}
$$

Equivalent to:
```qsharp
RFrac(PauliZ, -numerator, denominator + 1, qubit);
RFrac(PauliI, numerator, denominator + 1, qubit);
```
