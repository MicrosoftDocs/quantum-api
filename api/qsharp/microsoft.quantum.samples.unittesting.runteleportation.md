---
uid: Microsoft.Quantum.Samples.UnitTesting.RunTeleportation
title: RunTeleportation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: RunTeleportation
qsharp.summary: >-
  Teleportation transfers 1 qubit by encoding it into a 2-bit message,
  using an entangled pair of qubits.
---

# RunTeleportation operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Teleportation transfers 1 qubit by encoding it into a 2-bit message,using an entangled pair of qubits.

```qsharp
operation RunTeleportation (source : Qubit, target : Qubit) : Unit
```


## Input

### source : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A single qubit representing the state to be teleported.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A single qubit initially in the |0⟩ state onto whichgiven state is to be teleported.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

    Always returns source qubit to |0⟩.The circuit first creates an EPR pair between the target qubit andan ancilla qubit that gets allocated inside the function. Then aBell measurement between the source qubit and one half of the EPRpair is performed. Finally, depending on the 4 possible outcomes ofthe Bell measurement, a correction is performed to restore the statein the target qubit.

## References

- [ *Michael A. Nielsen , Isaac L. Chuang*,  Quantum Computation and Quantum Information ](http://doi.org/10.1017/CBO9780511976667)

## See Also

- [For details see Section 1.3.6 of Nielsen & Chuang](xref:For details see Section 1.3.6 of Nielsen & Chuang)