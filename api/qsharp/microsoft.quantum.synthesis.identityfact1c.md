---
uid: Microsoft.Quantum.Synthesis.IdentityFact1C
title: IdentityFact1C function
ms.date: 3/12/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: IdentityFact1C
qsharp.summary: Requires that a single-qubit Clifford operator is equal to the identity.
---

# IdentityFact1C function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Requires that a single-qubit Clifford operator is equal to the identity.

```qsharp
function IdentityFact1C (op : Microsoft.Quantum.Synthesis.SingleQubitClifford, message : String) : Unit
```


## Input

### op : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)




### message : [String](xref:microsoft.quantum.lang-ref.string)

Failure message string to be used when `actual` is not equal to the identity.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

