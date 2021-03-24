---
uid: Microsoft.Quantum.Samples.UnitTesting.TDepthOneCCNOT
title: TDepthOneCCNOT operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: TDepthOneCCNOT
qsharp.summary: CCNOT gate over the Clifford+T gate set, in T-depth 1, according to Selinger
---

# TDepthOneCCNOT operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


CCNOT gate over the Clifford+T gate set, in T-depth 1, according to Selinger

```qsharp
operation TDepthOneCCNOT (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Uses 7 T gates, 7 CNOT gates, 2 Hadamard gates and has T-depth 3.

## References

- [ *P. Selinger*,  Phys. Rev. A 87: 042302 (2013)](http://doi.org/10.1103/PhysRevA.87.042302)

## See Also

- [For the circuit diagram see Figure 1 onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[ Page 3 of arXiv:1210.0974v2 ](https://arxiv.org/pdf/1210.0974v2.pdf#page=2)](xref:For the circuit diagram see Figure 1 onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[ Page 3 of arXiv:1210.0974v2 ](https://arxiv.org/pdf/1210.0974v2.pdf#page=2))