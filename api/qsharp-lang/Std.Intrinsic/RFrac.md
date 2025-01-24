---
uid: Qdk.Std.Intrinsic.RFrac
title: RFrac operation
description: "Q# RFrac operation: Applies a rotation about the given Pauli axis by an angle specified as a dyadic fraction.  WARNING: This operation uses the **opposite** sign convention from Std.Intrinsic.R."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: RFrac
qsharp.summary: "Applies a rotation about the given Pauli axis by an angle specified as a dyadic fraction.  WARNING: This operation uses the **opposite** sign convention from Std.Intrinsic.R."
---

# RFrac operation

Fully qualified name: Std.Intrinsic.RFrac

```qsharp
operation RFrac(pauli : Pauli, numerator : Int, power : Int, qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies a rotation about the given Pauli axis by an angle specified
as a dyadic fraction.

WARNING:
This operation uses the **opposite** sign convention from
Std.Intrinsic.R.

## Input
### pauli
Pauli operator to be exponentiated to form the rotation.
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
    R_{\mu}(n, k) \mathrel{:=}
    e^{i \pi n \sigma_{\mu} / 2^k},
\end{align}
$$
where $\mu \in \{I, X, Y, Z\}$.

Equivalent to:
```qsharp
// PI() is a Q# function that returns an approximation of π.
R(pauli, -2.0 * PI() * IntAsDouble(numerator) / IntAsDouble(2 ^ (power - 1)), qubit);
```
