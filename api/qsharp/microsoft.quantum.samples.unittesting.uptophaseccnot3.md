---
uid: Microsoft.Quantum.Samples.UnitTesting.UpToPhaseCCNOT3
title: UpToPhaseCCNOT3 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: UpToPhaseCCNOT3
qsharp.summary: >-
  Simple implementation of the CCNOT gate up to phases over
  defined as |c₁⟩⊗|c₂⟩⊗|t⟩ ↦ (-i)^(c₁∧c₂) |c₁⟩⊗|c₂⟩⊗|t⊕(c₁∧c₂)⟩.
---

# UpToPhaseCCNOT3 operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Simple implementation of the CCNOT gate up to phases overdefined as |c₁⟩⊗|c₂⟩⊗|t⟩ ↦ (-i)^(c₁∧c₂) |c₁⟩⊗|c₂⟩⊗|t⊕(c₁∧c₂)⟩.

```qsharp
operation UpToPhaseCCNOT3 (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

