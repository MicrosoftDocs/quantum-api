---
uid: Microsoft.Quantum.Samples.UnitTesting.ApplyControlledSWAPUsingExplicitDecomposition
title: ApplyControlledSWAPUsingExplicitDecomposition operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: ApplyControlledSWAPUsingExplicitDecomposition
qsharp.summary: >-
  Implementation of the 3 qubit Fredkin gate over the Clifford+T gate set,
  according to Amy et al
---

# ApplyControlledSWAPUsingExplicitDecomposition operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implementation of the 3 qubit Fredkin gate over the Clifford+T gate set,according to Amy et al

```qsharp
operation ApplyControlledSWAPUsingExplicitDecomposition (control : Qubit, target1 : Qubit, target2 : Qubit) : Unit is Adj + Ctl
```


## Input

### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Uses 7 T gates, 8 CNOT gates, 2 Hadamard gates and has T-depth 4.

## References

- [ *M. Amy, D. Maslov, M. Mosca, M. Roetteler*,  IEEE Trans. CAD, 32(6): 818-830 (2013) ](http://doi.org/10.1109/TCAD.2013.2244643)

## See Also

- [For the circuit diagram see Figure 7 (e) onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[Page 15 of arXiv:1206.0758v3](https://arxiv.org/pdf/1206.0758v3.pdf#page=15)](xref:For the circuit diagram see Figure 7 (e) onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[Page 15 of arXiv:1206.0758v3](https://arxiv.org/pdf/1206.0758v3.pdf#page=15))