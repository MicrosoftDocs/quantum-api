---
uid: Microsoft.Quantum.Samples.UnitTesting.UpToPhaseCCNOT2
title: UpToPhaseCCNOT2 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: UpToPhaseCCNOT2
qsharp.summary: >-
  Implementation of the CCNOT gate up to phases over the Clifford+T gate set,
  according to Selinger. On computational basis states this gate acts as
  |c₁⟩⊗|c₂⟩⊗|t⟩ ↦ (-i)^(c₁∧c₂) |c₁⟩⊗|c₂⟩⊗|t⊕(c₁∧c₂)⟩.
  This circuit uses 4 T gates and has T depth 1 and uses one ancillary qubit
---

# UpToPhaseCCNOT2 operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implementation of the CCNOT gate up to phases over the Clifford+T gate set,according to Selinger. On computational basis states this gate acts as|c₁⟩⊗|c₂⟩⊗|t⟩ ↦ (-i)^(c₁∧c₂) |c₁⟩⊗|c₂⟩⊗|t⊕(c₁∧c₂)⟩.This circuit uses 4 T gates and has T depth 1 and uses one ancillary qubit

```qsharp
operation UpToPhaseCCNOT2 (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## References

- [ *P. Selinger*,  Physical Review A 87: 042302 (2013)](http://doi.org/10.1103/PhysRevA.87.042302)

## See Also

- [For the circuit diagram see Equation 9 onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[ Page 2 of arXiv:1210.0974v2 ](https://arxiv.org/pdf/1210.0974v2.pdf#page=2)](xref:For the circuit diagram see Equation 9 onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[ Page 2 of arXiv:1210.0974v2 ](https://arxiv.org/pdf/1210.0974v2.pdf#page=2))