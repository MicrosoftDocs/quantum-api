---
uid: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic.Y
title: Y operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic
qsharp.name: Y
qsharp.summary: >-
  In OpenQASM: `gate y a { u3(pi,pi/2,pi/2) a; }`. Note that the controlled specialization is not supported,
  since OpenQASM does not support artibrary numbers of control qubits.
---

# Y operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic](xref:Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic)

Package: [Microsoft.Quantum.Decompositions.OpenQASM](https://nuget.org/packages/Microsoft.Quantum.Decompositions.OpenQASM)


In OpenQASM: `gate y a { u3(pi,pi/2,pi/2) a; }`. Note that the controlled specialization is not supported,since OpenQASM does not support artibrary numbers of control qubits.

```qsharp
operation Y (qubit : Qubit) : Unit is Adj
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

