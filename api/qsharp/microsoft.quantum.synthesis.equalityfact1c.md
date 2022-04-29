---
uid: Microsoft.Quantum.Synthesis.EqualityFact1C
title: EqualityFact1C function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: EqualityFact1C
qsharp.summary: Requires that a single-qubit Clifford operator has the expected value.
---

# EqualityFact1C function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Requires that a single-qubit Clifford operator has the expected value.

```qsharp
function EqualityFact1C (actual : Microsoft.Quantum.Synthesis.SingleQubitClifford, expected : Microsoft.Quantum.Synthesis.SingleQubitClifford, message : String) : Unit
```


## Input

### actual : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The value to be checked.


### expected : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The expected value.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Failure message string to be used when `actual` is not equal to `expected`.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

