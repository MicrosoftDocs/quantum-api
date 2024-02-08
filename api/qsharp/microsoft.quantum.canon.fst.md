---
uid: Microsoft.Quantum.Canon.Fst
title: Fst function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: Fst
qsharp.summary: Given a pair, returns its first element.
---

# Fst function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a pair, returns its first element.

```qsharp
function Fst<'T, 'U> (pair : ('T, 'U)) : 'T
```


## Input

### pair : ('T,'U)

A tuple with two elements.



## Output : 'T

The first element of `pair`.

## Type Parameters

### 'T

The type of the pair's first member.
### 'U

The type of the pair's second member.