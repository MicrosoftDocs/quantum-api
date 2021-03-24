---
uid: Microsoft.Quantum.Samples.UnitTesting.ApplyMultiControlledXByBorrowing
title: ApplyMultiControlledXByBorrowing operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: ApplyMultiControlledXByBorrowing
qsharp.summary: Multiply controlled NOT gate using dirty qubits, according to Barenco et al
---

# ApplyMultiControlledXByBorrowing operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Multiply controlled NOT gate using dirty qubits, according to Barenco et al

```qsharp
operation ApplyMultiControlledXByBorrowing (controls : Qubit[], target : Qubit) : Unit is Adj + Ctl
```


## Input

### controls : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Quantum register which holds the control qubits


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit which is the target of the multiply controlled NOT.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The circuit uses (Length(controls)-2) dirty qubits. These are used as scratchspace and are returned in the same state as when they were borrowed.

## References

- [ *A. Barenco, Ch.H. Bennett, R. Cleve, D.P. DiVincenzo, N.Margolus, P.Shor,  T.Sleator, J.A. Smolin, H. Weinfurter*  Phys. Rev. A 52, 3457 (1995)](http://doi.org/10.1103/PhysRevA.52.3457)

## See Also

- [For the circuit diagram see the figure onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[Page 19 of arXiv:quant-ph/9503016](https://arxiv.org/pdf/quant-ph/9503016v1.pdf#page=19)](xref:For the circuit diagram see the figure onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline[Page 19 of arXiv:quant-ph/9503016](https://arxiv.org/pdf/quant-ph/9503016v1.pdf#page=19))
- [File MultiControlledXBorrow.png in the same folder as this file showsMarkdig.Syntax.Inlines.LineBreakInlinethe relation between the function implementation and circuit.the relation between the function implementation and circuit.](xref:File MultiControlledXBorrow.png in the same folder as this file showsMarkdig.Syntax.Inlines.LineBreakInlinethe relation between the function implementation and circuit.the relation between the function implementation and circuit.)