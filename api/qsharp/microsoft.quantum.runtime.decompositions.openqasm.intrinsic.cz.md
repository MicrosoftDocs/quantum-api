---
uid: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic.CZ
title: CZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic
qsharp.name: CZ
qsharp.summary: >-
  In OpenQASM: `gate cz c,t { CZ c,t; }`. Note that the controlled specialization is not supported,
  since OpenQASM does not support artibrary numbers of control qubits.
---

# CZ operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic](xref:Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic)

Package: [Microsoft.Quantum.Decompositions.OpenQASM](https://nuget.org/packages/Microsoft.Quantum.Decompositions.OpenQASM)


In OpenQASM: `gate cz c,t { CZ c,t; }`. Note that the controlled specialization is not supported,since OpenQASM does not support artibrary numbers of control qubits.

```qsharp
operation CZ (control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

