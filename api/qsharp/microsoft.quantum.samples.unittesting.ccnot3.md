---
uid: Microsoft.Quantum.Samples.UnitTesting.CCNOT3
title: CCNOT3 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: CCNOT3
qsharp.summary: >-
  Implementation of the CCNOT gate over the Clifford+T gate set, with 4 T-gates,
  according to Jones
---

# CCNOT3 operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implementation of the CCNOT gate over the Clifford+T gate set, with 4 T-gates,according to Jones

```qsharp
operation CCNOT3 (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Uses 4 T gates, 7 CNOT gates, 2 Hadamard gates and has T-depth 3 and 1 Measurement

## References

- [ *N. C. Jones*,  Phys. Rev. A 87: 022328 (2013) ](http://doi.org/10.1103/PhysRevA.87.022328)

## See Also

- [For the circuit diagram see Figure 1 (b)Markdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[on Page 2 of arXiv:1212.5069v1](https://arxiv.org/pdf/1212.5069v1.pdf#page=2)](xref:For the circuit diagram see Figure 1 (b)Markdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[on Page 2 of arXiv:1212.5069v1](https://arxiv.org/pdf/1212.5069v1.pdf#page=2))