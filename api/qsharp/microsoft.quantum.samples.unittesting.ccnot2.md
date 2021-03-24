---
uid: Microsoft.Quantum.Samples.UnitTesting.CCNOT2
title: CCNOT2 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: CCNOT2
qsharp.summary: ''
---

# CCNOT2 operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)




```qsharp
operation CCNOT2 (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The circuit corresponding to this implementation uses 7 T gates,7 CNOT gates, 2 Hadamard gates and has T-depth 4.

## References

- [ *M. Amy, D. Maslov, M. Mosca, M. Roetteler*,  IEEE Trans. CAD, 32(6): 818-830 (2013)](http://doi.org/10.1109/TCAD.2013.2244643)

## See Also

- [For the circuit diagram see Figure 7 (a) onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[Page 15 of arXiv:1206.0758v3](https://arxiv.org/pdf/1206.0758v3.pdf#page=15)](xref:For the circuit diagram see Figure 7 (a) onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[Page 15 of arXiv:1206.0758v3](https://arxiv.org/pdf/1206.0758v3.pdf#page=15))