---
uid: Qdk.Std.StatePreparation.PreparePureStateD
title: PreparePureStateD operation
description: "Q# PreparePureStateD operation: Given a set of coefficients and a big-endian quantum register, prepares a state on that register described by the given coefficients."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.StatePreparation
qsharp.name: PreparePureStateD
qsharp.summary: "Given a set of coefficients and a big-endian quantum register, prepares a state on that register described by the given coefficients."
---

# PreparePureStateD operation

Fully qualified name: Std.StatePreparation.PreparePureStateD

```qsharp
operation PreparePureStateD(coefficients : Double[], qubits : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Given a set of coefficients and a big-endian quantum register,
prepares a state on that register described by the given coefficients.

## Description
This operation prepares an arbitrary quantum
state |𝜓⟩ with coefficients 𝑎ⱼ from
the n-qubit computational basis state |0...0⟩.

The action of U on the all-zeros state is given by
$$
\begin{align}
    U \ket{0\cdots 0} = \ket{\psi} = \frac{\sum_{j=0}^{2^n-1}\alpha_j \ket{j}}{\sqrt{\sum_{j=0}^{2^n-1}|\alpha_j|^2}}.
\end{align}
$$

## Input
### coefficients
Array of up to 2ⁿ real coefficients. The j-th coefficient
indexes the number state |j⟩ encoded in big-endian format.

### qubits
Qubit register encoding number states in a big-endian format. This is
expected to be initialized in the computational basis state |0...0⟩.

## Remarks
`coefficients` will be normalized and padded with
elements 𝑎ⱼ = 0.0 if fewer than 2ⁿ are specified.

## Example
The following snippet prepares the quantum state |𝜓⟩=√(1/8)|0⟩+√(7/8)|2⟩=√(1/8)|00⟩+√(7/8)|10⟩
in the qubit register `qubits`.
```qsharp
let amplitudes = [Sqrt(0.125), 0.0, Sqrt(0.875), 0.0];
use qubits = Qubit[2];
PreparePureStateD(amplitudes, qubits);
```

## References
- [arXiv:quant-ph/0406176](https://arxiv.org/abs/quant-ph/0406176)
  "Synthesis of Quantum Logic Circuits",
  Vivek V. Shende, Stephen S. Bullock, Igor L. Markov

## See Also
- Std.StatePreparation.ApproximatelyPreparePureStateCP
