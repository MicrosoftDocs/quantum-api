---
uid: Microsoft.Quantum.Samples.UnitTesting.RunSuperdenseCoding
title: RunSuperdenseCoding operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: RunSuperdenseCoding
qsharp.summary: >-
  Test run of the protocol. We first create an EPR pair between two
  ancilla qubits. Depending on the value of two classical bits then one out of 4
  possible Bell states is created by applying a local transformation to just one
  half of the EPR pair. Finally, a Bell measurement is applied to
  decode the two bits of classical information from the state.
---

# RunSuperdenseCoding operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Test run of the protocol. We first create an EPR pair between twoancilla qubits. Depending on the value of two classical bits then one out of 4possible Bell states is created by applying a local transformation to just onehalf of the EPR pair. Finally, a Bell measurement is applied todecode the two bits of classical information from the state.

```qsharp
operation RunSuperdenseCoding (bitsAsInt : Int[]) : Unit
```


## Input

### bitsAsInt : [Int](xref:microsoft.quantum.lang-ref.int)[]





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

We encode the bits we are going to transmit in the run of the protocolin the array of Integers, so this function can be usedwith IterateThroughCartesianPower.

## References

- [ *Michael A. Nielsen , Isaac L. Chuang*,  Quantum Computation and Quantum Information ](http://doi.org/10.1017/CBO9780511976667)

## See Also

- [See Section 2.3 of Nielsen & Chuang for detailed discussion of theMarkdig.Syntax.Inlines.LineBreakInlinesuperdense codingsuperdense coding](xref:See Section 2.3 of Nielsen & Chuang for detailed discussion of theMarkdig.Syntax.Inlines.LineBreakInlinesuperdense codingsuperdense coding)