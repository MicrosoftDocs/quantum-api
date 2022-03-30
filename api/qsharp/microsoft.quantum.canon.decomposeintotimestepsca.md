---
uid: Microsoft.Quantum.Canon.DecomposeIntoTimeStepsCA
title: DecomposeIntoTimeStepsCA function
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: DecomposeIntoTimeStepsCA
qsharp.summary: >+
  > [!WARNING]

  > DecomposeIntoTimeStepsCA has been deprecated. Please use <xref:Microsoft.Quantum.Canon.DecomposedIntoTimeStepsCA> instead.

---

# DecomposeIntoTimeStepsCA function

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


> [!WARNING]
> DecomposeIntoTimeStepsCA has been deprecated. Please use <xref:Microsoft.Quantum.Canon.DecomposedIntoTimeStepsCA> instead.



```qsharp
function DecomposeIntoTimeStepsCA<'T> ((nSteps : Int, op : ((Int, Double, 'T) => Unit is Adj + Ctl)), trotterOrder : Int) : ((Double, 'T) => Unit is Adj + Ctl)
```


## Input

### nSteps : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)




### op : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),[Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl




### trotterOrder : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)





## Output : ([Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl



## Type Parameters

### 'T

