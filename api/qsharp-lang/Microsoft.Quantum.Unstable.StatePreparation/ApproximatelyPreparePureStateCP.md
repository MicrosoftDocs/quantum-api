---
uid: Microsoft.Quantum.Unstable.StatePreparation.ApproximatelyPreparePureStateCP
title: ApproximatelyPreparePureStateCP operation
ms.date: 02/21/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Unstable.StatePreparation
qsharp.name: ApproximatelyPreparePureStateCP
qsharp.summary: Given a set of coefficients and a big-endian quantum register,
prepares a state on that register described by the given coefficients,
up to a given approximation tolerance.
---

# ApproximatelyPreparePureStateCP operation

Namespace: [Microsoft.Quantum.Unstable.StatePreparation](xref:Microsoft.Quantum.Unstable.StatePreparation)

```qsharp
operation ApproximatelyPreparePureStateCP(tolerance : Double, coefficients : ComplexPolar[], qubits : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Given a set of coefficients and a big-endian quantum register,
prepares a state on that register described by the given coefficients,
up to a given approximation tolerance.

## Description
This operation prepares an arbitrary quantum
state |𝜓⟩ with complex coefficients rⱼ·𝒆^(𝒊·tⱼ) from
the n-qubit computational basis state |0...0⟩.
In particular, the action of this operation can be simulated by the
a unitary transformation U which acts on the all-zeros state as

$$
\begin{align}
    U\ket{0...0}
        & = \ket{\psi} \\\\
        & = \frac{
                \sum_{j=0}^{2^n-1} r_j e^{i t_j} \ket{j}
            }{
                \sqrt{\sum_{j=0}^{2^n-1} |r_j|^2}
            }.
\end{align}
$$

## Input
### tolerance
The approximation tolerance to be used when preparing the given state.

### coefficients
Array of up to 2ⁿ complex coefficients represented by their
absolute value and phase (rⱼ, tⱼ). The j-th coefficient
indexes the number state |j⟩ encoded in a big-endian format.

### qubits
Qubit register encoding number states in a big-endian format. This is
expected to be initialized in the computational basis state
|0...0⟩.

## Remarks
`coefficients` will be padded with
elements (rⱼ, tⱼ) = (0.0, 0.0) if fewer than 2ⁿ are
specified.

## References
- Synthesis of Quantum Logic Circuits
  Vivek V. Shende, Stephen S. Bullock, Igor L. Markov
  https://arxiv.org/abs/quant-ph/0406176
