---
uid: Microsoft.Quantum.Preparation.PrepareIdentity
title: PrepareIdentity operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: PrepareIdentity
qsharp.summary: >-
  Given a register, prepares that register in the maximally mixed state.

  The register is prepared in the $\boldone / 2^N$ state by applying the
  complete depolarizing
  channel to each qubit, where $N$ is the length of the register.
---

# PrepareIdentity operation

Namespace: [Microsoft.Quantum.Preparation](xref:Microsoft.Quantum.Preparation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a register, prepares that register in the maximally mixed state.The register is prepared in the $\boldone / 2^N$ state by applying thecomplete depolarizingchannel to each qubit, where $N$ is the length of the register.

```qsharp
operation PrepareIdentity (register : Qubit[]) : Unit
```


## Input

### register : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

A register whose state is to be depolarized in the mannerdescribed above.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Preparation.PrepareSingleQubitIdentity](xref:Microsoft.Quantum.Preparation.PrepareSingleQubitIdentity)