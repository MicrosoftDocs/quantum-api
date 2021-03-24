---
uid: Microsoft.Quantum.Samples.OracleSynthesis.TruthTable
title: TruthTable function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.OracleSynthesis
qsharp.name: TruthTable
qsharp.summary: Converts integer for truth table into array of Booleans
---

# TruthTable function

Namespace: [Microsoft.Quantum.Samples.OracleSynthesis](xref:Microsoft.Quantum.Samples.OracleSynthesis)

Package: [OracleSynthesis](https://nuget.org/packages/OracleSynthesis)


Converts integer for truth table into array of Booleans

```qsharp
function TruthTable (func : Int, vars : Int) : Bool[]
```


## Input

### func : [Int](xref:microsoft.quantum.lang-ref.int)

Truth table in integer representation


### vars : [Int](xref:microsoft.quantum.lang-ref.int)

Number of variables in truth table



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

Array of 2^vars truth table values