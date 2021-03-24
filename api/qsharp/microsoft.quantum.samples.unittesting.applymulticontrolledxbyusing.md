---
uid: Microsoft.Quantum.Samples.UnitTesting.ApplyMultiControlledXByUsing
title: ApplyMultiControlledXByUsing operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: ApplyMultiControlledXByUsing
qsharp.summary: >-
  Implements Multiply Controlled Not gate using Microsoft.Quantum.Canon
  library combinator
---

# ApplyMultiControlledXByUsing operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implements Multiply Controlled Not gate using Microsoft.Quantum.Canonlibrary combinator

```qsharp
operation ApplyMultiControlledXByUsing (controls : Qubit[], target : Qubit) : Unit is Adj + Ctl
```


## Input

### controls : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Quantum register which holds the control qubits


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit which is the target of the multiply controlled NOT.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## See Also

- [@"Microsoft.Quantum.Canon.ApplyMultiControlledCA"](xref:@"Microsoft.Quantum.Canon.ApplyMultiControlledCA")