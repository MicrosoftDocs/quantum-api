---
uid: Microsoft.Quantum.Arithmetic.MultiplyI
title: MultiplyI operation
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: MultiplyI
qsharp.summary: >-
  Multiply integer `xs` by integer `ys` and store the result in `result`,
  which must be zero initially.
---

# MultiplyI operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Multiply integer `xs` by integer `ys` and store the result in `result`,which must be zero initially.

```qsharp
operation MultiplyI (xs : Microsoft.Quantum.Arithmetic.LittleEndian, ys : Microsoft.Quantum.Arithmetic.LittleEndian, result : Microsoft.Quantum.Arithmetic.LittleEndian) : Unit is Adj + Ctl
```


## Input

### xs : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

𝑛₁-bit multiplicand


### ys : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

𝑛₂-bit multiplier


### result : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

(𝑛₁+𝑛₂)-bit result, must be in state |0⟩ initially.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Uses a standard shift-and-add approach to implement the multiplication.The controlled version was improved by copying out 𝑥ᵢ to an ancillaqubit conditioned on the control qubits, and then controlling theaddition on the ancilla qubit.