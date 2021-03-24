---
uid: Microsoft.Quantum.Samples.OracleSynthesis.Extend
title: Extend function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.OracleSynthesis
qsharp.name: Extend
qsharp.summary: Extends a spectrum by inverted coefficients
---

# Extend function

Namespace: [Microsoft.Quantum.Samples.OracleSynthesis](xref:Microsoft.Quantum.Samples.OracleSynthesis)

Package: [OracleSynthesis](https://nuget.org/packages/OracleSynthesis)


Extends a spectrum by inverted coefficients

```qsharp
function Extend (spectrum : Int[]) : Int[]
```


## Input

### spectrum : [Int](xref:microsoft.quantum.lang-ref.int)[]

Spectral coefficients



## Output : [Int](xref:microsoft.quantum.lang-ref.int)[]

Coefficients followed by inverted copy

## Example

```Q#Extend([2, 2, 2, -2]); // [2, 2, 2, -2, -2, -2, -2, 2]```