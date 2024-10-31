---
uid: Qdk.Std.Canon.ApplyQFT
title: ApplyQFT operation
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyQFT
qsharp.summary: "Applies the rotations of Quantum Fourier Transform (QFT) to a little-endian quantum register."
---

# ApplyQFT operation

Fully qualified name: Std.Canon.ApplyQFT

```qsharp
operation ApplyQFT(qs : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Applies the rotations of Quantum Fourier Transform (QFT) to a little-endian quantum register.

## Description
Applies the rotations of QFT to a little-endian register `qs` of length n
containing |x₁⟩⊗|x₂⟩⊗…⊗|xₙ⟩. The qs[0] initially contains the
least significant bit xₙ. The state of qs[0] becomes
(|0⟩+𝑒^(2π𝑖[0.xₙ])|1⟩)/sqrt(2) after the operation.

## Input
### qs
Quantum register in a little-endian format to which the rotations are applied.

## Remarks
Note that this operation applies only the rotations part of the QFT.
To complete the transform, you need to reverse the order of qubits after this operation,
for example, using the operation `SwapReverseRegister`.

## Reference
 - [Quantum Fourier transform](https://en.wikipedia.org/wiki/Quantum_Fourier_transform)
