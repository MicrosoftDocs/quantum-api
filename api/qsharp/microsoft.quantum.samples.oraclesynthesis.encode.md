---
uid: Microsoft.Quantum.Samples.OracleSynthesis.Encode
title: Encode function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.OracleSynthesis
qsharp.name: Encode
qsharp.summary: Encode truth table in {1,-1} coding
---

# Encode function

Namespace: [Microsoft.Quantum.Samples.OracleSynthesis](xref:Microsoft.Quantum.Samples.OracleSynthesis)

Package: [OracleSynthesis](https://nuget.org/packages/OracleSynthesis)


Encode truth table in {1,-1} coding

```qsharp
function Encode (table : Bool[]) : Int[]
```


## Input

### table : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

Truth table as array of truth values



## Output : [Int](xref:microsoft.quantum.lang-ref.int)[]

Truth table as array of {1,-1} integers

## Example

```Q#Encode([false, false, false, true]); // [1, 1, 1, -1]```