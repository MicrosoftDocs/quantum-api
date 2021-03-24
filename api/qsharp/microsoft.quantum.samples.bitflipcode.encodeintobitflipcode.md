---
uid: Microsoft.Quantum.Samples.BitFlipCode.EncodeIntoBitFlipCode
title: EncodeIntoBitFlipCode operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.BitFlipCode
qsharp.name: EncodeIntoBitFlipCode
qsharp.summary: >-
  Given a qubit representing a state to be protected and two auxiliary
  qubits initially in the |0〉 state, encodes the state into the
  three-qubit bit-flip code.
---

# EncodeIntoBitFlipCode operation

Namespace: [Microsoft.Quantum.Samples.BitFlipCode](xref:Microsoft.Quantum.Samples.BitFlipCode)

Package: [BitFlipCode](https://nuget.org/packages/BitFlipCode)


Given a qubit representing a state to be protected and two auxiliaryqubits initially in the |0〉 state, encodes the state into thethree-qubit bit-flip code.

```qsharp
operation EncodeIntoBitFlipCode (data : Qubit, auxiliaryQubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### data : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A qubit whose state is to be protected.


### auxiliaryQubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Two qubits, initially in the |00〉 state, to be used in protectingthe state of `data`.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

