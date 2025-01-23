---
uid: Qdk.Std.Intrinsic.M
title: M operation
description: "Q# M operation: Performs a measurement of a single qubit in the Pauli _Z_ basis."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: M
qsharp.summary: "Performs a measurement of a single qubit in the Pauli _Z_ basis."
---

# M operation

Fully qualified name: Std.Intrinsic.M

```qsharp
operation M(qubit : Qubit) : Result
```

## Summary
Performs a measurement of a single qubit in the
Pauli _Z_ basis.

## Input
### qubit
Qubit to be measured.

## Output
`Zero` if the +1 eigenvalue is observed, and `One` if
the -1 eigenvalue is observed.

## Remarks
The output result is given by
the distribution
$$
\begin{align}
    \Pr(\texttt{Zero} | \ket{\psi}) =
        \braket{\psi | 0} \braket{0 | \psi}.
\end{align}
$$

Equivalent to:
```qsharp
Measure([PauliZ], [qubit]);
```
